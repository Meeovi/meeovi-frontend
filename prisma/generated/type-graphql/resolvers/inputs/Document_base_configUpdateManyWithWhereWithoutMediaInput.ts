import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configScalarWhereInput } from "../inputs/Document_base_configScalarWhereInput";
import { Document_base_configUpdateManyMutationInput } from "../inputs/Document_base_configUpdateManyMutationInput";

@TypeGraphQL.InputType("Document_base_configUpdateManyWithWhereWithoutMediaInput", {})
export class Document_base_configUpdateManyWithWhereWithoutMediaInput {
  @TypeGraphQL.Field(_type => Document_base_configScalarWhereInput, {
    nullable: false
  })
  where!: Document_base_configScalarWhereInput;

  @TypeGraphQL.Field(_type => Document_base_configUpdateManyMutationInput, {
    nullable: false
  })
  data!: Document_base_configUpdateManyMutationInput;
}
