import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageUpdateWithoutMediaInput } from "../inputs/Cms_pageUpdateWithoutMediaInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageUpdateWithWhereUniqueWithoutMediaInput", {})
export class Cms_pageUpdateWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_pageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_pageUpdateWithoutMediaInput, {
    nullable: false
  })
  data!: Cms_pageUpdateWithoutMediaInput;
}
