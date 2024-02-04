import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_templateOrderByWithAggregationInput } from "../../../inputs/Flow_templateOrderByWithAggregationInput";
import { Flow_templateScalarWhereWithAggregatesInput } from "../../../inputs/Flow_templateScalarWhereWithAggregatesInput";
import { Flow_templateWhereInput } from "../../../inputs/Flow_templateWhereInput";
import { Flow_templateScalarFieldEnum } from "../../../../enums/Flow_templateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFlow_templateArgs {
  @TypeGraphQL.Field(_type => Flow_templateWhereInput, {
    nullable: true
  })
  where?: Flow_templateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Flow_templateOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Flow_templateOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_templateScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "config" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Flow_templateScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Flow_templateScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
