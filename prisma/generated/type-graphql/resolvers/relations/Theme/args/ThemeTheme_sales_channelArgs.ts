import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_sales_channelOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Theme_sales_channelOrderByWithRelationAndSearchRelevanceInput";
import { Theme_sales_channelWhereInput } from "../../../inputs/Theme_sales_channelWhereInput";
import { Theme_sales_channelWhereUniqueInput } from "../../../inputs/Theme_sales_channelWhereUniqueInput";
import { Theme_sales_channelScalarFieldEnum } from "../../../../enums/Theme_sales_channelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ThemeTheme_sales_channelArgs {
  @TypeGraphQL.Field(_type => Theme_sales_channelWhereInput, {
    nullable: true
  })
  where?: Theme_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Theme_sales_channelOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Theme_sales_channelOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Theme_sales_channelWhereUniqueInput, {
    nullable: true
  })
  cursor?: Theme_sales_channelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Theme_sales_channelScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"theme_id" | "sales_channel_id"> | undefined;
}
