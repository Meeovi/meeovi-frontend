import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockUpdateWithoutMediaInput } from "../inputs/Cms_blockUpdateWithoutMediaInput";
import { Cms_blockWhereUniqueInput } from "../inputs/Cms_blockWhereUniqueInput";

@TypeGraphQL.InputType("Cms_blockUpdateWithWhereUniqueWithoutMediaInput", {})
export class Cms_blockUpdateWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Cms_blockWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_blockWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_blockUpdateWithoutMediaInput, {
    nullable: false
  })
  data!: Cms_blockUpdateWithoutMediaInput;
}
