import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderCreateNestedOneWithoutMedia_default_folderInput } from "../inputs/Media_folderCreateNestedOneWithoutMedia_default_folderInput";

@TypeGraphQL.InputType("Media_default_folderCreateInput", {})
export class Media_default_folderCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  association_fields!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  entity!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Media_folderCreateNestedOneWithoutMedia_default_folderInput, {
    nullable: true
  })
  media_folder?: Media_folderCreateNestedOneWithoutMedia_default_folderInput | undefined;
}
