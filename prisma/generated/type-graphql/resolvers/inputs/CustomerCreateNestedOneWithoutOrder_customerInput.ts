import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutOrder_customerInput } from "../inputs/CustomerCreateOrConnectWithoutOrder_customerInput";
import { CustomerCreateWithoutOrder_customerInput } from "../inputs/CustomerCreateWithoutOrder_customerInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedOneWithoutOrder_customerInput", {})
export class CustomerCreateNestedOneWithoutOrder_customerInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutOrder_customerInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutOrder_customerInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutOrder_customerInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutOrder_customerInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
