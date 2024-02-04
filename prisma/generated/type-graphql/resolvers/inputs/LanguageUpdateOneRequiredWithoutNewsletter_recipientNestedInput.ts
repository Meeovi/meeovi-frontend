import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutNewsletter_recipientInput } from "../inputs/LanguageCreateOrConnectWithoutNewsletter_recipientInput";
import { LanguageCreateWithoutNewsletter_recipientInput } from "../inputs/LanguageCreateWithoutNewsletter_recipientInput";
import { LanguageUpdateToOneWithWhereWithoutNewsletter_recipientInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutNewsletter_recipientInput";
import { LanguageUpsertWithoutNewsletter_recipientInput } from "../inputs/LanguageUpsertWithoutNewsletter_recipientInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutNewsletter_recipientNestedInput", {})
export class LanguageUpdateOneRequiredWithoutNewsletter_recipientNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutNewsletter_recipientInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutNewsletter_recipientInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutNewsletter_recipientInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutNewsletter_recipientInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutNewsletter_recipientInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutNewsletter_recipientInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutNewsletter_recipientInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutNewsletter_recipientInput | undefined;
}
