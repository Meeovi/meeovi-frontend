import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutProduct_reviewInput } from "../inputs/LanguageUpdateWithoutProduct_reviewInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutProduct_reviewInput", {})
export class LanguageUpdateToOneWithWhereWithoutProduct_reviewInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_reviewInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutProduct_reviewInput;
}
