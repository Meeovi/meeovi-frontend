import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configCreateManyMediaInput } from "../inputs/Document_base_configCreateManyMediaInput";

@TypeGraphQL.InputType("Document_base_configCreateManyMediaInputEnvelope", {})
export class Document_base_configCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [Document_base_configCreateManyMediaInput], {
    nullable: false
  })
  data!: Document_base_configCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
