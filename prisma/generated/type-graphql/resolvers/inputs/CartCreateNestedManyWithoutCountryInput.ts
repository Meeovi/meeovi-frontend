import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyCountryInputEnvelope } from "../inputs/CartCreateManyCountryInputEnvelope";
import { CartCreateOrConnectWithoutCountryInput } from "../inputs/CartCreateOrConnectWithoutCountryInput";
import { CartCreateWithoutCountryInput } from "../inputs/CartCreateWithoutCountryInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartCreateNestedManyWithoutCountryInput", {})
export class CartCreateNestedManyWithoutCountryInput {
  @TypeGraphQL.Field(_type => [CartCreateWithoutCountryInput], {
    nullable: true
  })
  create?: CartCreateWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartCreateOrConnectWithoutCountryInput], {
    nullable: true
  })
  connectOrCreate?: CartCreateOrConnectWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => CartCreateManyCountryInputEnvelope, {
    nullable: true
  })
  createMany?: CartCreateManyCountryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  connect?: CartWhereUniqueInput[] | undefined;
}
