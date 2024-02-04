import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_item_downloadScalarWhereInput } from "../inputs/Order_line_item_downloadScalarWhereInput";
import { Order_line_item_downloadUpdateManyMutationInput } from "../inputs/Order_line_item_downloadUpdateManyMutationInput";

@TypeGraphQL.InputType("Order_line_item_downloadUpdateManyWithWhereWithoutMediaInput", {})
export class Order_line_item_downloadUpdateManyWithWhereWithoutMediaInput {
  @TypeGraphQL.Field(_type => Order_line_item_downloadScalarWhereInput, {
    nullable: false
  })
  where!: Order_line_item_downloadScalarWhereInput;

  @TypeGraphQL.Field(_type => Order_line_item_downloadUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_line_item_downloadUpdateManyMutationInput;
}
