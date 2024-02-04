import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockScalarWhereInput } from "../inputs/Cms_blockScalarWhereInput";
import { Cms_blockUpdateManyMutationInput } from "../inputs/Cms_blockUpdateManyMutationInput";

@TypeGraphQL.InputType("Cms_blockUpdateManyWithWhereWithoutMediaInput", {})
export class Cms_blockUpdateManyWithWhereWithoutMediaInput {
  @TypeGraphQL.Field(_type => Cms_blockScalarWhereInput, {
    nullable: false
  })
  where!: Cms_blockScalarWhereInput;

  @TypeGraphQL.Field(_type => Cms_blockUpdateManyMutationInput, {
    nullable: false
  })
  data!: Cms_blockUpdateManyMutationInput;
}
