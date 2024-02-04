import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutUnit_translationInput } from "../inputs/LanguageCreateOrConnectWithoutUnit_translationInput";
import { LanguageCreateWithoutUnit_translationInput } from "../inputs/LanguageCreateWithoutUnit_translationInput";
import { LanguageUpdateToOneWithWhereWithoutUnit_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutUnit_translationInput";
import { LanguageUpsertWithoutUnit_translationInput } from "../inputs/LanguageUpsertWithoutUnit_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutUnit_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutUnit_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutUnit_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutUnit_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutUnit_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutUnit_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutUnit_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutUnit_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutUnit_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutUnit_translationInput | undefined;
}
