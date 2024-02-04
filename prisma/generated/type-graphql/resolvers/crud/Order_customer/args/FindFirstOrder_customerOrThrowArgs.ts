import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_customerOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Order_customerOrderByWithRelationAndSearchRelevanceInput";
import { Order_customerWhereInput } from "../../../inputs/Order_customerWhereInput";
import { Order_customerWhereUniqueInput } from "../../../inputs/Order_customerWhereUniqueInput";
import { Order_customerScalarFieldEnum } from "../../../../enums/Order_customerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstOrder_customerOrThrowArgs {
  @TypeGraphQL.Field(_type => Order_customerWhereInput, {
    nullable: true
  })
  where?: Order_customerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_customerOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Order_customerOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_customerWhereUniqueInput, {
    nullable: true
  })
  cursor?: Order_customerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Order_customerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "customer_id" | "order_id" | "order_version_id" | "email" | "salutation_id" | "first_name" | "last_name" | "title" | "vat_ids" | "company" | "customer_number" | "custom_fields" | "created_at" | "updated_at" | "remote_address"> | undefined;
}
