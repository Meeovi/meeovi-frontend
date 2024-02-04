import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyCustomerInputEnvelope } from "../inputs/CartCreateManyCustomerInputEnvelope";
import { CartCreateOrConnectWithoutCustomerInput } from "../inputs/CartCreateOrConnectWithoutCustomerInput";
import { CartCreateWithoutCustomerInput } from "../inputs/CartCreateWithoutCustomerInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartCreateNestedManyWithoutCustomerInput", {})
export class CartCreateNestedManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [CartCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: CartCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: CartCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => CartCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: CartCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  connect?: CartWhereUniqueInput[] | undefined;
}
