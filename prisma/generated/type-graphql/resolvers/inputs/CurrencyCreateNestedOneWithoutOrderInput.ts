import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateOrConnectWithoutOrderInput } from "../inputs/CurrencyCreateOrConnectWithoutOrderInput";
import { CurrencyCreateWithoutOrderInput } from "../inputs/CurrencyCreateWithoutOrderInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyCreateNestedOneWithoutOrderInput", {})
export class CurrencyCreateNestedOneWithoutOrderInput {
  @TypeGraphQL.Field(_type => CurrencyCreateWithoutOrderInput, {
    nullable: true
  })
  create?: CurrencyCreateWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyCreateOrConnectWithoutOrderInput, {
    nullable: true
  })
  connectOrCreate?: CurrencyCreateOrConnectWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: true
  })
  connect?: CurrencyWhereUniqueInput | undefined;
}
