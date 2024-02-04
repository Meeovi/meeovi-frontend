import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutState_machine_translationInput } from "../inputs/LanguageCreateOrConnectWithoutState_machine_translationInput";
import { LanguageCreateWithoutState_machine_translationInput } from "../inputs/LanguageCreateWithoutState_machine_translationInput";
import { LanguageUpdateToOneWithWhereWithoutState_machine_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutState_machine_translationInput";
import { LanguageUpsertWithoutState_machine_translationInput } from "../inputs/LanguageUpsertWithoutState_machine_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutState_machine_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutState_machine_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutState_machine_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutState_machine_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutState_machine_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutState_machine_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutState_machine_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutState_machine_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutState_machine_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutState_machine_translationInput | undefined;
}
