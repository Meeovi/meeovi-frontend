import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeCreateWithoutDocument_base_configInput } from "../inputs/Document_typeCreateWithoutDocument_base_configInput";
import { Document_typeWhereUniqueInput } from "../inputs/Document_typeWhereUniqueInput";

@TypeGraphQL.InputType("Document_typeCreateOrConnectWithoutDocument_base_configInput", {})
export class Document_typeCreateOrConnectWithoutDocument_base_configInput {
  @TypeGraphQL.Field(_type => Document_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Document_typeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_typeCreateWithoutDocument_base_configInput, {
    nullable: false
  })
  create!: Document_typeCreateWithoutDocument_base_configInput;
}
