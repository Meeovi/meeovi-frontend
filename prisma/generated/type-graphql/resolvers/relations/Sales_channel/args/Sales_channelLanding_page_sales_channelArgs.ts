import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_sales_channelOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Landing_page_sales_channelOrderByWithRelationAndSearchRelevanceInput";
import { Landing_page_sales_channelWhereInput } from "../../../inputs/Landing_page_sales_channelWhereInput";
import { Landing_page_sales_channelWhereUniqueInput } from "../../../inputs/Landing_page_sales_channelWhereUniqueInput";
import { Landing_page_sales_channelScalarFieldEnum } from "../../../../enums/Landing_page_sales_channelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Sales_channelLanding_page_sales_channelArgs {
  @TypeGraphQL.Field(_type => Landing_page_sales_channelWhereInput, {
    nullable: true
  })
  where?: Landing_page_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Landing_page_sales_channelOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelWhereUniqueInput, {
    nullable: true
  })
  cursor?: Landing_page_sales_channelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"landing_page_id" | "landing_page_version_id" | "sales_channel_id"> | undefined;
}
