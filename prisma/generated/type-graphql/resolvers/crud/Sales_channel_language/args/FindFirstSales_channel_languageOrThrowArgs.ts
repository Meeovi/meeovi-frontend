import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_languageOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Sales_channel_languageOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channel_languageWhereInput } from "../../../inputs/Sales_channel_languageWhereInput";
import { Sales_channel_languageWhereUniqueInput } from "../../../inputs/Sales_channel_languageWhereUniqueInput";
import { Sales_channel_languageScalarFieldEnum } from "../../../../enums/Sales_channel_languageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSales_channel_languageOrThrowArgs {
  @TypeGraphQL.Field(_type => Sales_channel_languageWhereInput, {
    nullable: true
  })
  where?: Sales_channel_languageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_languageOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Sales_channel_languageOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_languageWhereUniqueInput, {
    nullable: true
  })
  cursor?: Sales_channel_languageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_languageScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"sales_channel_id" | "language_id"> | undefined;
}
