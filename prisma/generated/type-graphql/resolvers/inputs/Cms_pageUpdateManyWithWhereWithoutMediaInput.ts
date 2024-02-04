import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageScalarWhereInput } from "../inputs/Cms_pageScalarWhereInput";
import { Cms_pageUpdateManyMutationInput } from "../inputs/Cms_pageUpdateManyMutationInput";

@TypeGraphQL.InputType("Cms_pageUpdateManyWithWhereWithoutMediaInput", {})
export class Cms_pageUpdateManyWithWhereWithoutMediaInput {
  @TypeGraphQL.Field(_type => Cms_pageScalarWhereInput, {
    nullable: false
  })
  where!: Cms_pageScalarWhereInput;

  @TypeGraphQL.Field(_type => Cms_pageUpdateManyMutationInput, {
    nullable: false
  })
  data!: Cms_pageUpdateManyMutationInput;
}
