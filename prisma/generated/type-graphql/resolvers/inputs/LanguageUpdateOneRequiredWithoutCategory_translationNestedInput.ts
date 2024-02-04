import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutCategory_translationInput } from "../inputs/LanguageCreateOrConnectWithoutCategory_translationInput";
import { LanguageCreateWithoutCategory_translationInput } from "../inputs/LanguageCreateWithoutCategory_translationInput";
import { LanguageUpdateToOneWithWhereWithoutCategory_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutCategory_translationInput";
import { LanguageUpsertWithoutCategory_translationInput } from "../inputs/LanguageUpsertWithoutCategory_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutCategory_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutCategory_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutCategory_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutCategory_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutCategory_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutCategory_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutCategory_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutCategory_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutCategory_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutCategory_translationInput | undefined;
}
