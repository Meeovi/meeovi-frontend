import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_tagScalarWhereInput } from "../inputs/Order_tagScalarWhereInput";
import { Order_tagUpdateManyMutationInput } from "../inputs/Order_tagUpdateManyMutationInput";

@TypeGraphQL.InputType("Order_tagUpdateManyWithWhereWithoutOrderInput", {})
export class Order_tagUpdateManyWithWhereWithoutOrderInput {
  @TypeGraphQL.Field(_type => Order_tagScalarWhereInput, {
    nullable: false
  })
  where!: Order_tagScalarWhereInput;

  @TypeGraphQL.Field(_type => Order_tagUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_tagUpdateManyMutationInput;
}
