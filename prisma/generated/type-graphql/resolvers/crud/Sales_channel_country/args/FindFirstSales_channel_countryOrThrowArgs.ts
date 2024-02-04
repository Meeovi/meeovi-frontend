import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_countryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Sales_channel_countryOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channel_countryWhereInput } from "../../../inputs/Sales_channel_countryWhereInput";
import { Sales_channel_countryWhereUniqueInput } from "../../../inputs/Sales_channel_countryWhereUniqueInput";
import { Sales_channel_countryScalarFieldEnum } from "../../../../enums/Sales_channel_countryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSales_channel_countryOrThrowArgs {
  @TypeGraphQL.Field(_type => Sales_channel_countryWhereInput, {
    nullable: true
  })
  where?: Sales_channel_countryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_countryOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Sales_channel_countryOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_countryWhereUniqueInput, {
    nullable: true
  })
  cursor?: Sales_channel_countryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_countryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"sales_channel_id" | "country_id"> | undefined;
}
