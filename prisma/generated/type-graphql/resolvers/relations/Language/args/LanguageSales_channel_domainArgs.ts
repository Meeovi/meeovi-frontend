import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_domainOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Sales_channel_domainOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channel_domainWhereInput } from "../../../inputs/Sales_channel_domainWhereInput";
import { Sales_channel_domainWhereUniqueInput } from "../../../inputs/Sales_channel_domainWhereUniqueInput";
import { Sales_channel_domainScalarFieldEnum } from "../../../../enums/Sales_channel_domainScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class LanguageSales_channel_domainArgs {
  @TypeGraphQL.Field(_type => Sales_channel_domainWhereInput, {
    nullable: true
  })
  where?: Sales_channel_domainWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_domainOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Sales_channel_domainOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_domainWhereUniqueInput, {
    nullable: true
  })
  cursor?: Sales_channel_domainWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_domainScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "sales_channel_id" | "language_id" | "url" | "currency_id" | "snippet_set_id" | "hreflang_use_only_locale" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
