import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_country_roundingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Currency_country_roundingOrderByWithRelationAndSearchRelevanceInput";
import { Currency_country_roundingWhereInput } from "../../../inputs/Currency_country_roundingWhereInput";
import { Currency_country_roundingWhereUniqueInput } from "../../../inputs/Currency_country_roundingWhereUniqueInput";
import { Currency_country_roundingScalarFieldEnum } from "../../../../enums/Currency_country_roundingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCurrency_country_roundingOrThrowArgs {
  @TypeGraphQL.Field(_type => Currency_country_roundingWhereInput, {
    nullable: true
  })
  where?: Currency_country_roundingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Currency_country_roundingOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingWhereUniqueInput, {
    nullable: true
  })
  cursor?: Currency_country_roundingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "currency_id" | "country_id" | "item_rounding" | "total_rounding" | "created_at" | "updated_at"> | undefined;
}
