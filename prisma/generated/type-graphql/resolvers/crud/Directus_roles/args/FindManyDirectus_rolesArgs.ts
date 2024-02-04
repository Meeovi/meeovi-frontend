import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_rolesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Directus_rolesOrderByWithRelationAndSearchRelevanceInput";
import { Directus_rolesWhereInput } from "../../../inputs/Directus_rolesWhereInput";
import { Directus_rolesWhereUniqueInput } from "../../../inputs/Directus_rolesWhereUniqueInput";
import { Directus_rolesScalarFieldEnum } from "../../../../enums/Directus_rolesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyDirectus_rolesArgs {
  @TypeGraphQL.Field(_type => Directus_rolesWhereInput, {
    nullable: true
  })
  where?: Directus_rolesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_rolesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Directus_rolesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesWhereUniqueInput, {
    nullable: true
  })
  cursor?: Directus_rolesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Directus_rolesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "icon" | "description" | "ip_access" | "enforce_tfa" | "admin_access" | "app_access"> | undefined;
}
