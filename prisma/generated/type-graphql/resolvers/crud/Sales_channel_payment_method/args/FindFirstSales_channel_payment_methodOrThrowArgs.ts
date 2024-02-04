import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_payment_methodOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Sales_channel_payment_methodOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channel_payment_methodWhereInput } from "../../../inputs/Sales_channel_payment_methodWhereInput";
import { Sales_channel_payment_methodWhereUniqueInput } from "../../../inputs/Sales_channel_payment_methodWhereUniqueInput";
import { Sales_channel_payment_methodScalarFieldEnum } from "../../../../enums/Sales_channel_payment_methodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSales_channel_payment_methodOrThrowArgs {
  @TypeGraphQL.Field(_type => Sales_channel_payment_methodWhereInput, {
    nullable: true
  })
  where?: Sales_channel_payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_payment_methodOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Sales_channel_payment_methodOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_payment_methodWhereUniqueInput, {
    nullable: true
  })
  cursor?: Sales_channel_payment_methodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_payment_methodScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"sales_channel_id" | "payment_method_id"> | undefined;
}
