import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutProduct_manufacturerInput } from "../inputs/MediaUpdateWithoutProduct_manufacturerInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutProduct_manufacturerInput", {})
export class MediaUpdateToOneWithWhereWithoutProduct_manufacturerInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutProduct_manufacturerInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutProduct_manufacturerInput;
}
