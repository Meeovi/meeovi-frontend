import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyUpdateWithoutCartInput } from "../inputs/CurrencyUpdateWithoutCartInput";
import { CurrencyWhereInput } from "../inputs/CurrencyWhereInput";

@TypeGraphQL.InputType("CurrencyUpdateToOneWithWhereWithoutCartInput", {})
export class CurrencyUpdateToOneWithWhereWithoutCartInput {
  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpdateWithoutCartInput, {
    nullable: false
  })
  data!: CurrencyUpdateWithoutCartInput;
}
