import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateOrConnectWithoutCartInput } from "../inputs/Payment_methodCreateOrConnectWithoutCartInput";
import { Payment_methodCreateWithoutCartInput } from "../inputs/Payment_methodCreateWithoutCartInput";
import { Payment_methodUpdateToOneWithWhereWithoutCartInput } from "../inputs/Payment_methodUpdateToOneWithWhereWithoutCartInput";
import { Payment_methodUpsertWithoutCartInput } from "../inputs/Payment_methodUpsertWithoutCartInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodUpdateOneRequiredWithoutCartNestedInput", {})
export class Payment_methodUpdateOneRequiredWithoutCartNestedInput {
  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutCartInput, {
    nullable: true
  })
  create?: Payment_methodCreateWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateOrConnectWithoutCartInput, {
    nullable: true
  })
  connectOrCreate?: Payment_methodCreateOrConnectWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpsertWithoutCartInput, {
    nullable: true
  })
  upsert?: Payment_methodUpsertWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: true
  })
  connect?: Payment_methodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpdateToOneWithWhereWithoutCartInput, {
    nullable: true
  })
  update?: Payment_methodUpdateToOneWithWhereWithoutCartInput | undefined;
}
