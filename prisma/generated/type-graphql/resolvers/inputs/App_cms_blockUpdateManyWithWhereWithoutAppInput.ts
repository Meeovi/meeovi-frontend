import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_blockScalarWhereInput } from "../inputs/App_cms_blockScalarWhereInput";
import { App_cms_blockUpdateManyMutationInput } from "../inputs/App_cms_blockUpdateManyMutationInput";

@TypeGraphQL.InputType("App_cms_blockUpdateManyWithWhereWithoutAppInput", {})
export class App_cms_blockUpdateManyWithWhereWithoutAppInput {
  @TypeGraphQL.Field(_type => App_cms_blockScalarWhereInput, {
    nullable: false
  })
  where!: App_cms_blockScalarWhereInput;

  @TypeGraphQL.Field(_type => App_cms_blockUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_cms_blockUpdateManyMutationInput;
}
