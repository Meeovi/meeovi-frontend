import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistCreateManyCustomerInputEnvelope } from "../inputs/Customer_wishlistCreateManyCustomerInputEnvelope";
import { Customer_wishlistCreateOrConnectWithoutCustomerInput } from "../inputs/Customer_wishlistCreateOrConnectWithoutCustomerInput";
import { Customer_wishlistCreateWithoutCustomerInput } from "../inputs/Customer_wishlistCreateWithoutCustomerInput";
import { Customer_wishlistWhereUniqueInput } from "../inputs/Customer_wishlistWhereUniqueInput";

@TypeGraphQL.InputType("Customer_wishlistCreateNestedManyWithoutCustomerInput", {})
export class Customer_wishlistCreateNestedManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [Customer_wishlistCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: Customer_wishlistCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: Customer_wishlistCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_wishlistCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_wishlistWhereUniqueInput[] | undefined;
}
