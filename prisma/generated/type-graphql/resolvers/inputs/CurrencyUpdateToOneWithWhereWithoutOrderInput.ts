import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyUpdateWithoutOrderInput } from "../inputs/CurrencyUpdateWithoutOrderInput";
import { CurrencyWhereInput } from "../inputs/CurrencyWhereInput";

@TypeGraphQL.InputType("CurrencyUpdateToOneWithWhereWithoutOrderInput", {})
export class CurrencyUpdateToOneWithWhereWithoutOrderInput {
  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: CurrencyUpdateWithoutOrderInput;
}
