import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Unit_translationOrderByWithAggregationInput } from "../../../inputs/Unit_translationOrderByWithAggregationInput";
import { Unit_translationScalarWhereWithAggregatesInput } from "../../../inputs/Unit_translationScalarWhereWithAggregatesInput";
import { Unit_translationWhereInput } from "../../../inputs/Unit_translationWhereInput";
import { Unit_translationScalarFieldEnum } from "../../../../enums/Unit_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUnit_translationArgs {
  @TypeGraphQL.Field(_type => Unit_translationWhereInput, {
    nullable: true
  })
  where?: Unit_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Unit_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Unit_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Unit_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"unit_id" | "language_id" | "short_code" | "name" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Unit_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Unit_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
