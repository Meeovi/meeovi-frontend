import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_group_registration_sales_channelsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Customer_group_registration_sales_channelsOrderByWithRelationAndSearchRelevanceInput";
import { Customer_group_registration_sales_channelsWhereInput } from "../../../inputs/Customer_group_registration_sales_channelsWhereInput";
import { Customer_group_registration_sales_channelsWhereUniqueInput } from "../../../inputs/Customer_group_registration_sales_channelsWhereUniqueInput";
import { Customer_group_registration_sales_channelsScalarFieldEnum } from "../../../../enums/Customer_group_registration_sales_channelsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCustomer_group_registration_sales_channelsArgs {
  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsWhereInput, {
    nullable: true
  })
  where?: Customer_group_registration_sales_channelsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Customer_group_registration_sales_channelsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Customer_group_registration_sales_channelsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"customer_group_id" | "sales_channel_id" | "created_at"> | undefined;
}
