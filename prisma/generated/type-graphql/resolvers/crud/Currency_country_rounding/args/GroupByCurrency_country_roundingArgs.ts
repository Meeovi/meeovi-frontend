import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_country_roundingOrderByWithAggregationInput } from "../../../inputs/Currency_country_roundingOrderByWithAggregationInput";
import { Currency_country_roundingScalarWhereWithAggregatesInput } from "../../../inputs/Currency_country_roundingScalarWhereWithAggregatesInput";
import { Currency_country_roundingWhereInput } from "../../../inputs/Currency_country_roundingWhereInput";
import { Currency_country_roundingScalarFieldEnum } from "../../../../enums/Currency_country_roundingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCurrency_country_roundingArgs {
  @TypeGraphQL.Field(_type => Currency_country_roundingWhereInput, {
    nullable: true
  })
  where?: Currency_country_roundingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Currency_country_roundingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "currency_id" | "country_id" | "item_rounding" | "total_rounding" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Currency_country_roundingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Currency_country_roundingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
