import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_stream_translationInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_stream_translationInput";
import { LanguageCreateWithoutProduct_stream_translationInput } from "../inputs/LanguageCreateWithoutProduct_stream_translationInput";
import { LanguageUpdateToOneWithWhereWithoutProduct_stream_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutProduct_stream_translationInput";
import { LanguageUpsertWithoutProduct_stream_translationInput } from "../inputs/LanguageUpsertWithoutProduct_stream_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutProduct_stream_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutProduct_stream_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_stream_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_stream_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_stream_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_stream_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutProduct_stream_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutProduct_stream_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutProduct_stream_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutProduct_stream_translationInput | undefined;
}
