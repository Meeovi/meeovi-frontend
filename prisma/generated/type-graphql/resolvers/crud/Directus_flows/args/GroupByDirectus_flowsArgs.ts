import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_flowsOrderByWithAggregationInput } from "../../../inputs/Directus_flowsOrderByWithAggregationInput";
import { Directus_flowsScalarWhereWithAggregatesInput } from "../../../inputs/Directus_flowsScalarWhereWithAggregatesInput";
import { Directus_flowsWhereInput } from "../../../inputs/Directus_flowsWhereInput";
import { Directus_flowsScalarFieldEnum } from "../../../../enums/Directus_flowsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDirectus_flowsArgs {
  @TypeGraphQL.Field(_type => Directus_flowsWhereInput, {
    nullable: true
  })
  where?: Directus_flowsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Directus_flowsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "icon" | "color" | "description" | "status" | "trigger" | "accountability" | "options" | "operation" | "date_created" | "user_created">;

  @TypeGraphQL.Field(_type => Directus_flowsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Directus_flowsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
