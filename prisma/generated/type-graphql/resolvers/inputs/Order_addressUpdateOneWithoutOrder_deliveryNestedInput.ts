import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateOrConnectWithoutOrder_deliveryInput } from "../inputs/Order_addressCreateOrConnectWithoutOrder_deliveryInput";
import { Order_addressCreateWithoutOrder_deliveryInput } from "../inputs/Order_addressCreateWithoutOrder_deliveryInput";
import { Order_addressUpdateToOneWithWhereWithoutOrder_deliveryInput } from "../inputs/Order_addressUpdateToOneWithWhereWithoutOrder_deliveryInput";
import { Order_addressUpsertWithoutOrder_deliveryInput } from "../inputs/Order_addressUpsertWithoutOrder_deliveryInput";
import { Order_addressWhereInput } from "../inputs/Order_addressWhereInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressUpdateOneWithoutOrder_deliveryNestedInput", {})
export class Order_addressUpdateOneWithoutOrder_deliveryNestedInput {
  @TypeGraphQL.Field(_type => Order_addressCreateWithoutOrder_deliveryInput, {
    nullable: true
  })
  create?: Order_addressCreateWithoutOrder_deliveryInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressCreateOrConnectWithoutOrder_deliveryInput, {
    nullable: true
  })
  connectOrCreate?: Order_addressCreateOrConnectWithoutOrder_deliveryInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressUpsertWithoutOrder_deliveryInput, {
    nullable: true
  })
  upsert?: Order_addressUpsertWithoutOrder_deliveryInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressWhereInput, {
    nullable: true
  })
  disconnect?: Order_addressWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressWhereInput, {
    nullable: true
  })
  delete?: Order_addressWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: true
  })
  connect?: Order_addressWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressUpdateToOneWithWhereWithoutOrder_deliveryInput, {
    nullable: true
  })
  update?: Order_addressUpdateToOneWithWhereWithoutOrder_deliveryInput | undefined;
}
