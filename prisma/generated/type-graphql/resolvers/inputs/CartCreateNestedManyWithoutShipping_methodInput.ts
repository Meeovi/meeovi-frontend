import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyShipping_methodInputEnvelope } from "../inputs/CartCreateManyShipping_methodInputEnvelope";
import { CartCreateOrConnectWithoutShipping_methodInput } from "../inputs/CartCreateOrConnectWithoutShipping_methodInput";
import { CartCreateWithoutShipping_methodInput } from "../inputs/CartCreateWithoutShipping_methodInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartCreateNestedManyWithoutShipping_methodInput", {})
export class CartCreateNestedManyWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => [CartCreateWithoutShipping_methodInput], {
    nullable: true
  })
  create?: CartCreateWithoutShipping_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartCreateOrConnectWithoutShipping_methodInput], {
    nullable: true
  })
  connectOrCreate?: CartCreateOrConnectWithoutShipping_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => CartCreateManyShipping_methodInputEnvelope, {
    nullable: true
  })
  createMany?: CartCreateManyShipping_methodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  connect?: CartWhereUniqueInput[] | undefined;
}
