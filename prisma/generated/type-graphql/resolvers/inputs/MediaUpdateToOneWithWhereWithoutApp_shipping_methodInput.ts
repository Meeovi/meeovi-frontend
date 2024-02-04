import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutApp_shipping_methodInput } from "../inputs/MediaUpdateWithoutApp_shipping_methodInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutApp_shipping_methodInput", {})
export class MediaUpdateToOneWithWhereWithoutApp_shipping_methodInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutApp_shipping_methodInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutApp_shipping_methodInput;
}
