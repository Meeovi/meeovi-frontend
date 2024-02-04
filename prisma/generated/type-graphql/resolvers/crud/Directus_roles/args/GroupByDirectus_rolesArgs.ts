import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_rolesOrderByWithAggregationInput } from "../../../inputs/Directus_rolesOrderByWithAggregationInput";
import { Directus_rolesScalarWhereWithAggregatesInput } from "../../../inputs/Directus_rolesScalarWhereWithAggregatesInput";
import { Directus_rolesWhereInput } from "../../../inputs/Directus_rolesWhereInput";
import { Directus_rolesScalarFieldEnum } from "../../../../enums/Directus_rolesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDirectus_rolesArgs {
  @TypeGraphQL.Field(_type => Directus_rolesWhereInput, {
    nullable: true
  })
  where?: Directus_rolesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_rolesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Directus_rolesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_rolesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "icon" | "description" | "ip_access" | "enforce_tfa" | "admin_access" | "app_access">;

  @TypeGraphQL.Field(_type => Directus_rolesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Directus_rolesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
