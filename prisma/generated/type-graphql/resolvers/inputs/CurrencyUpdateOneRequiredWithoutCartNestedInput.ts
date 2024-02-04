import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateOrConnectWithoutCartInput } from "../inputs/CurrencyCreateOrConnectWithoutCartInput";
import { CurrencyCreateWithoutCartInput } from "../inputs/CurrencyCreateWithoutCartInput";
import { CurrencyUpdateToOneWithWhereWithoutCartInput } from "../inputs/CurrencyUpdateToOneWithWhereWithoutCartInput";
import { CurrencyUpsertWithoutCartInput } from "../inputs/CurrencyUpsertWithoutCartInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyUpdateOneRequiredWithoutCartNestedInput", {})
export class CurrencyUpdateOneRequiredWithoutCartNestedInput {
  @TypeGraphQL.Field(_type => CurrencyCreateWithoutCartInput, {
    nullable: true
  })
  create?: CurrencyCreateWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyCreateOrConnectWithoutCartInput, {
    nullable: true
  })
  connectOrCreate?: CurrencyCreateOrConnectWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpsertWithoutCartInput, {
    nullable: true
  })
  upsert?: CurrencyUpsertWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: true
  })
  connect?: CurrencyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpdateToOneWithWhereWithoutCartInput, {
    nullable: true
  })
  update?: CurrencyUpdateToOneWithWhereWithoutCartInput | undefined;
}
