import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutApp_translationInput } from "../inputs/LanguageCreateOrConnectWithoutApp_translationInput";
import { LanguageCreateWithoutApp_translationInput } from "../inputs/LanguageCreateWithoutApp_translationInput";
import { LanguageUpdateToOneWithWhereWithoutApp_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutApp_translationInput";
import { LanguageUpsertWithoutApp_translationInput } from "../inputs/LanguageUpsertWithoutApp_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutApp_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutApp_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutApp_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutApp_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutApp_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutApp_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutApp_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutApp_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutApp_translationInput | undefined;
}
