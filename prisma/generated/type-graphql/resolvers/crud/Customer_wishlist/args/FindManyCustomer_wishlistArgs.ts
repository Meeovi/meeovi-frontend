import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_wishlistOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Customer_wishlistOrderByWithRelationAndSearchRelevanceInput";
import { Customer_wishlistWhereInput } from "../../../inputs/Customer_wishlistWhereInput";
import { Customer_wishlistWhereUniqueInput } from "../../../inputs/Customer_wishlistWhereUniqueInput";
import { Customer_wishlistScalarFieldEnum } from "../../../../enums/Customer_wishlistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCustomer_wishlistArgs {
  @TypeGraphQL.Field(_type => Customer_wishlistWhereInput, {
    nullable: true
  })
  where?: Customer_wishlistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Customer_wishlistOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistWhereUniqueInput, {
    nullable: true
  })
  cursor?: Customer_wishlistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "customer_id" | "sales_channel_id" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
