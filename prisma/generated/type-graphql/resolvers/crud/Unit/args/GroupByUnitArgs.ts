import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnitOrderByWithAggregationInput } from "../../../inputs/UnitOrderByWithAggregationInput";
import { UnitScalarWhereWithAggregatesInput } from "../../../inputs/UnitScalarWhereWithAggregatesInput";
import { UnitWhereInput } from "../../../inputs/UnitWhereInput";
import { UnitScalarFieldEnum } from "../../../../enums/UnitScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUnitArgs {
  @TypeGraphQL.Field(_type => UnitWhereInput, {
    nullable: true
  })
  where?: UnitWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UnitOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UnitOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => UnitScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UnitScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
