import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateOrConnectWithoutApp_administration_snippetInput } from "../inputs/LocaleCreateOrConnectWithoutApp_administration_snippetInput";
import { LocaleCreateWithoutApp_administration_snippetInput } from "../inputs/LocaleCreateWithoutApp_administration_snippetInput";
import { LocaleUpdateToOneWithWhereWithoutApp_administration_snippetInput } from "../inputs/LocaleUpdateToOneWithWhereWithoutApp_administration_snippetInput";
import { LocaleUpsertWithoutApp_administration_snippetInput } from "../inputs/LocaleUpsertWithoutApp_administration_snippetInput";
import { LocaleWhereUniqueInput } from "../inputs/LocaleWhereUniqueInput";

@TypeGraphQL.InputType("LocaleUpdateOneRequiredWithoutApp_administration_snippetNestedInput", {})
export class LocaleUpdateOneRequiredWithoutApp_administration_snippetNestedInput {
  @TypeGraphQL.Field(_type => LocaleCreateWithoutApp_administration_snippetInput, {
    nullable: true
  })
  create?: LocaleCreateWithoutApp_administration_snippetInput | undefined;

  @TypeGraphQL.Field(_type => LocaleCreateOrConnectWithoutApp_administration_snippetInput, {
    nullable: true
  })
  connectOrCreate?: LocaleCreateOrConnectWithoutApp_administration_snippetInput | undefined;

  @TypeGraphQL.Field(_type => LocaleUpsertWithoutApp_administration_snippetInput, {
    nullable: true
  })
  upsert?: LocaleUpsertWithoutApp_administration_snippetInput | undefined;

  @TypeGraphQL.Field(_type => LocaleWhereUniqueInput, {
    nullable: true
  })
  connect?: LocaleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocaleUpdateToOneWithWhereWithoutApp_administration_snippetInput, {
    nullable: true
  })
  update?: LocaleUpdateToOneWithWhereWithoutApp_administration_snippetInput | undefined;
}
