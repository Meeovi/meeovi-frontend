import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateWithoutOrderInput } from "../inputs/Order_addressCreateWithoutOrderInput";
import { Order_addressUpdateWithoutOrderInput } from "../inputs/Order_addressUpdateWithoutOrderInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressUpsertWithWhereUniqueWithoutOrderInput", {})
export class Order_addressUpsertWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Order_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_addressUpdateWithoutOrderInput, {
    nullable: false
  })
  update!: Order_addressUpdateWithoutOrderInput;

  @TypeGraphQL.Field(_type => Order_addressCreateWithoutOrderInput, {
    nullable: false
  })
  create!: Order_addressCreateWithoutOrderInput;
}
