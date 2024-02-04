import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerOrderByRelevanceFieldEnum } from "../../enums/Order_customerOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_customerOrderByRelevanceInput", {})
export class Order_customerOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Order_customerOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"email" | "first_name" | "last_name" | "title" | "vat_ids" | "company" | "customer_number" | "custom_fields" | "remote_address">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
