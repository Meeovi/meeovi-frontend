import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutPayment_method_translationInput } from "../inputs/LanguageCreateOrConnectWithoutPayment_method_translationInput";
import { LanguageCreateWithoutPayment_method_translationInput } from "../inputs/LanguageCreateWithoutPayment_method_translationInput";
import { LanguageUpdateToOneWithWhereWithoutPayment_method_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutPayment_method_translationInput";
import { LanguageUpsertWithoutPayment_method_translationInput } from "../inputs/LanguageUpsertWithoutPayment_method_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutPayment_method_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutPayment_method_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutPayment_method_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutPayment_method_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutPayment_method_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutPayment_method_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutPayment_method_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutPayment_method_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutPayment_method_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutPayment_method_translationInput | undefined;
}
