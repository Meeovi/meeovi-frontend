import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutMedia_translationInput } from "../inputs/LanguageCreateOrConnectWithoutMedia_translationInput";
import { LanguageCreateWithoutMedia_translationInput } from "../inputs/LanguageCreateWithoutMedia_translationInput";
import { LanguageUpdateToOneWithWhereWithoutMedia_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutMedia_translationInput";
import { LanguageUpsertWithoutMedia_translationInput } from "../inputs/LanguageUpsertWithoutMedia_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutMedia_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutMedia_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutMedia_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutMedia_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutMedia_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutMedia_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutMedia_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutMedia_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutMedia_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutMedia_translationInput | undefined;
}
