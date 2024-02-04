import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_flowsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Directus_flowsOrderByWithRelationAndSearchRelevanceInput";
import { Directus_flowsWhereInput } from "../../../inputs/Directus_flowsWhereInput";
import { Directus_flowsWhereUniqueInput } from "../../../inputs/Directus_flowsWhereUniqueInput";
import { Directus_flowsScalarFieldEnum } from "../../../../enums/Directus_flowsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDirectus_flowsArgs {
  @TypeGraphQL.Field(_type => Directus_flowsWhereInput, {
    nullable: true
  })
  where?: Directus_flowsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Directus_flowsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_flowsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Directus_flowsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "icon" | "color" | "description" | "status" | "trigger" | "accountability" | "options" | "operation" | "date_created" | "user_created"> | undefined;
}
