import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_api_contextOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Sales_channel_api_contextOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channel_api_contextWhereInput } from "../../../inputs/Sales_channel_api_contextWhereInput";
import { Sales_channel_api_contextWhereUniqueInput } from "../../../inputs/Sales_channel_api_contextWhereUniqueInput";
import { Sales_channel_api_contextScalarFieldEnum } from "../../../../enums/Sales_channel_api_contextScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManySales_channel_api_contextArgs {
  @TypeGraphQL.Field(_type => Sales_channel_api_contextWhereInput, {
    nullable: true
  })
  where?: Sales_channel_api_contextWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_api_contextOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Sales_channel_api_contextOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_api_contextWhereUniqueInput, {
    nullable: true
  })
  cursor?: Sales_channel_api_contextWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_api_contextScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"token" | "payload" | "sales_channel_id" | "customer_id" | "updated_at"> | undefined;
}
